import { call, take, put } from 'redux-saga/effects';
import rsf from '~/service/firebase';

import { Creators as TaskCreators } from '~/store/ducks/task';

export function* taskChannel() {
  const channel = rsf.firestore.channel('task');
  while (true) {
    const task = yield take(channel);

    const result = [];
    // Parece que é obrigado a ser desse jeito
    task.forEach(doc => result.push({ id: doc.id, ...doc.data() }));

    yield put(TaskCreators.taskSuccess(result));
  }
}

export function* taskAdd({ payload }) {
  yield call(rsf.firestore.addDocument, 'task', payload);
}

export function* taskDel({ payload }) {
  yield call(rsf.firestore.deleteDocument, `task/${payload}`);
}

export function* taskUpdate({ payload }) {
  if (!payload) return;

  const { id, field, value } = payload;

  yield call(rsf.firestore.updateDocument, `task/${id}`, field, value);
}

export function* taskRequest() {
  yield call(rsf.firestore.addDocument, 'task', {
    title: 'Elon ' + Date.now(),
    message: 'Musk',
  });
}
