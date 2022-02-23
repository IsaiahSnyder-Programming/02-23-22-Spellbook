

export const dndApi = axios.create({
    baseUrl: 'https://www.dnd5eapi.co/api/spells',
    timeout: 5000,
})