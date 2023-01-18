import ReactDOM from 'react-dom';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockImplementation(() => ({
    render: jest.fn(),
  })),
}));

describe('Application root', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);
    require('../index.tsx');
    expect(ReactDOM.render).toBeDefined();
  });
});
