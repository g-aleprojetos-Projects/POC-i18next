import React from 'react';
import * as S from './App.styles'
import { useTranslation } from 'react-i18next';
import { namespaces } from '../utils/i18n/i18n.constants';
import './App.css';
import '../utils/i18n';

export const App = () => {
  const {t, i18n} = useTranslation(namespaces.pages.header);

  return (
<S.Container>
   <S.Header>
     <S.Nav>
       <S.Item><S.Texto>{t("home")}</S.Texto></S.Item>
       <S.Item><S.Texto>{t("contents")}</S.Texto></S.Item>
       <S.Item><S.Texto>{t("about")}</S.Texto></S.Item>
     </S.Nav>
  </S.Header>
  <S.Main>    
        <S.Botao 
          escolhido={i18n.resolvedLanguage === "pt" }   
          type="submit" 
          onClick={() => i18n.changeLanguage("pt")}>
            Português
        </S.Botao>
        <S.Botao 
          escolhido={i18n.resolvedLanguage === "en" }   
          type="submit" 
          onClick={() => i18n.changeLanguage("en")}>
            English
        </S.Botao>      
  </S.Main>
</S.Container>
  );
}

