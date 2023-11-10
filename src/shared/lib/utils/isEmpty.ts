export const isEmpti = <T extends object> (obj: T) => {
  const keys = Object.keys(obj)

  return !keys.length
}
