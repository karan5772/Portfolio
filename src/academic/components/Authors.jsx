import { splitAuthors } from '../lib'

/** Author list with the profile owner's own name in bold, as in a CV bibliography */
export default function Authors({ authors, owner }) {
  const list = splitAuthors(authors, owner)
  return (
    <>
      {list.map((a, i) => (
        <span key={`${a.name}-${i}`}>
          {a.own ? <strong>{a.name}</strong> : a.name}
          {i < list.length - 1 ? ', ' : ''}
        </span>
      ))}
    </>
  )
}
