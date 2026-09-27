import Image from 'next/image'
import { initials } from '../lib'

/**
 * The profile photo, or an initials avatar when no photo is provided.
 * Size comes from the parent: the wrapper fills its container, so templates control shape and size.
 */
export default function Avatar({ name, photo, className, initialsClassName, sizes = '240px', priority = false, alt }) {
  if (photo) {
    return (
      <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
        <Image src={photo} alt={alt ?? name} fill sizes={sizes} priority={priority} style={{ objectFit: 'cover' }} />
      </div>
    )
  }
  return (
    <div className={`${className ?? ''} ${initialsClassName ?? ''}`} role="img" aria-label={alt ?? name}>
      <span aria-hidden="true">{initials(name)}</span>
    </div>
  )
}
