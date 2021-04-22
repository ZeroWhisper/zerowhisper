import { store } from '@/app_redux';
import { DataModalNewArea } from './types/DataModalNewArea';
import { FormModalNewArea } from './types/FormModalNewArea';
import { ShowModalNewArea } from './types/ShowModalNewArea';

export const convertData = (data: DataModalNewArea) => {
  const poderes = store.getState().app_default.show.poderes;
  const setores = store.getState().app_default.show.setores;

  const poder = poderes?.find(e => e.value === data.poder.id);
  const setor = setores?.find(e => e.value === data.id);

  const show = {
    descricao: data.descricao,
    poder: data.poder,
  } as ShowModalNewArea;

  const form = {
    descricao: data.descricao,
    idSetor: setor.value,
    poder: poder.value,
  } as FormModalNewArea;

  return { show, form };
};
