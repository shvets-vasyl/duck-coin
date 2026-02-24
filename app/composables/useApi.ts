export const useApi = () => {
  const config = useRuntimeConfig()

  const apiFetch = $fetch.create({
    baseURL: config.public.apiBase,
    headers: { "Content-Type": "application/json" },
  })

  return { apiFetch }
}
