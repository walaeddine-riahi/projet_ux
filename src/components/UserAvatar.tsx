import React from 'react'

interface UserAvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  src?: string
}

const sizeClasses: Record<NonNullable<UserAvatarProps['size']>, string> = {
  sm: 'w-7 h-7',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name, size = 'sm', src }) => {
  const sizeClass = sizeClasses[size]

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`${sizeClass} rounded-full object-cover border-[3px] border-orange-200`}
      />
    )
  }

  const initial = name.charAt(0).toUpperCase()

  return (
    <div
      className={`rounded-full bg-primary-red text-white flex items-center justify-center ${sizeClass} text-xs`}
    >
      {initial}
    </div>
  )
}

export default UserAvatar


