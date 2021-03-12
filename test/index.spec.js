// Funciones a testear
import { onNavigate } from '../src/routers';

describe('funcion onNavigate', () => {
  it('debería ser una función', () => {
    expect(typeof onNavigate).toBe('function');
  });
});
