export interface INote {
  id: string
  name: string
  background: string
  content: string
  important: boolean
  setImportant: (value: boolean) => void
}
