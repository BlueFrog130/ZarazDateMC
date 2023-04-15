import { ComponentSettings, Manager } from '@managed-components/types'

export default async function (manager: Manager, _settings: ComponentSettings) {
  manager.addEventListener('pageview', ({ client }) => {
    client.execute('console.log(`[MC Date] - Current date is ${new Date()}`)')
  })
}
