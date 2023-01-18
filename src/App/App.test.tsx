import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import { App } from './App';

describe('App',() =>{
  const setup = () => render(<App />);

  describe('Renderização', () => {
    test('Deve renderizar o texto "Pagina Inicial".', () => {
      setup()
      const linkElement = screen.getByText(/Home/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto "Conteudo".', () => {
      setup()
      const linkElement = screen.getByText(/Contents/i);
      expect(linkElement).toBeInTheDocument();
    });

    test('Deve renderizar o texto "sobre".', () => {
      setup()
      const linkElement = screen.getByText(/About Us/i);
      expect(linkElement).toBeInTheDocument();
    });
  })

  describe('Comportamento', () => {
    test(`DEVE mudar o texto de "Home" para "Pagina Inicial" QUANDO clicar no botão "Português"`, () => {
      setup()
      const botao = screen.getByText(/Português/i);

      fireEvent.click(botao);

      const paginaInicial = screen.getByText(/Pagina Inicial/i);
      expect(paginaInicial).toBeDefined();
    });

    test(`DEVE mudar o texto de "Contents" para "Conteúdo" QUANDO clicar no botão "Português"`, () => {
      setup()
      const botao = screen.getByText(/Português/i);

      fireEvent.click(botao);

      const paginaInicial = screen.getByText(/Conteúdo/i);
      expect(paginaInicial).toBeDefined();
    });

    test(`DEVE mudar o texto de "About Us" para "Sobre" QUANDO clicar no botão "Português"`, () => {
      setup()
      const botao = screen.getByText(/Português/i);

      fireEvent.click(botao);

      const paginaInicial = screen.getByText(/Sobre/i);
      expect(paginaInicial).toBeDefined();
    });

    test(`DEVE voltar para o texto de "Home" QUANDO clicar no botão "Português" e depois "English"`, () => {
      setup()
      const botaoPortugues = screen.getByText(/Português/i);
      fireEvent.click(botaoPortugues);

      const botaoEnglish = screen.getByText(/English/i);
      fireEvent.click(botaoEnglish);
      const paginaInicial = screen.getByText(/Home/i);
      expect(paginaInicial).toBeDefined();
    });
  })
})
