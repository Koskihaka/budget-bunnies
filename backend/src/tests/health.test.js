import { describe, it, expect } from
'vitest'

describe('Health check', () => {
    it('should respond with status OK', async () => {
      const res = await fetch('https://budget-bunnies-backend-bsc6bvdrdffae7d6.northeurope-01.azurewebsites.net/health')
      const data = await res.json()
      expect(data.status).toBe('OK')
    })
  })