const { getGif } = require("../../helpers/getGifs")

describe('Pruebas al fecth gif', () => {

  test('Debe de traer 10 elementos', async () => {
    const gifs = await getGif('One Punch');

    expect(gifs.length).toBe(10);
  })

  test('Debe de traer 0 elementos', async () => {
    const gifs = await getGif('');

    expect(gifs.length).toBe(0);
  })

})
