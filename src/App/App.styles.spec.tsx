import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import * as S from './App.styles'

describe('App.styles', () => {
   test('Container DEVE ser igual ao snapshot', () => {
      const container = renderer.create(<S.Container />).toJSON();
      expect(container).toMatchSnapshot();
    });
    test('Header DEVE ser igual ao snapshot', () => {
      const header = renderer.create(<S.Header />).toJSON();
      expect(header).toMatchSnapshot();
    });

    test('Nav DEVE ser igual ao snapshot', () => {
       const nav = renderer.create(<S.Nav />).toJSON();
       expect(nav).toMatchSnapshot();
    });

    test('Item DEVE ser igual ao snapshot', () => {
       const item = renderer.create(<S.Item />).toJSON();
       expect(item).toMatchSnapshot();
    });

    test('Texto DEVE ser igual ao snapshot', () => {
       const texto = renderer.create(<S.Texto />).toJSON();
       expect(texto).toMatchSnapshot();
    });

    test('Main DEVE ser igual ao snapshot', () => {
      const main = renderer.create(<S.Main />).toJSON();
      expect(main).toMatchSnapshot();
   });

   test('Botao DEVE ser igual ao snapshot', () => {
      const botao = renderer.create(<S.Botao />).toJSON();
      expect(botao).toMatchSnapshot();
   });

   test('Botao DEVE ser igual ao snapshot QUANDO "escolhido" for igual a true', () => {
      const botao = renderer.create(<S.Botao escolhido={true} />).toJSON();
      expect(botao).toMatchSnapshot();
   });
})