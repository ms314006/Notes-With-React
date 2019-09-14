export interface INote {
  id: string
  name: string
  image: string
  content: string
  important: boolean
  setImportant: (value: boolean) => void
}
