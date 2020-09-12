import React from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { unstash } from '~/services/stash';

import AppTemplate from '~/components/AppTemplate';

import * as S from './style';
import { key, file } from './key';

const Contact = () => {
  const [doc, setDoc] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const doc = new GoogleSpreadsheet(file);

      // await doc.useServiceAccountAuth(require('./creds-from-google.json'));
      await doc.useServiceAccountAuth(await unstash(key));

      await doc.loadInfo();
      console.log(doc.title);

      setDoc(doc);
    })();
  }, []);

  return (
    <AppTemplate>
      <S.Container>
        TESTE
        <p>{doc && doc.title}</p>
      </S.Container>
    </AppTemplate>
  );
};

export default Contact;
