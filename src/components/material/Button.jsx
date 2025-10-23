import clsx from 'clsx';

export const Button = ({
  as: As = 'button',
  children = '',
  className = '',
  variant = 'normal', // 'normal' | 'outline'
  color = 'orange',     // 'blue' | 'red' | ...
  size = 'md',        // 'sm' | 'md' | 'lg' | 'xl'
  ...props
}) => {
  const base =  clsx('px-6 text-center transition hover:brightness-75 disabled:brightness-75 font-medium cursor-pointer border',
    variant === 'normal' && 'border-transparent');

  const sizeMap = {
    sm: 'py-1 text-sm',
    md: 'py-2',
    lg: 'py-2 text-xl',
    xl: 'py-3 text-2xl',
  };

  const variantMap = {
    normal: {
      blue: clsx('text-white', 'bg-blue-500'),
      red: clsx('text-white', 'bg-red-500'),
      gray: clsx('text-white', 'bg-gray-500'),
      green: clsx('text-white', 'bg-green-500'),
      yellow: clsx('text-black', 'bg-yellow-500'),
      pink: clsx('text-white', 'bg-pink-500'),
      orange: clsx('text-white', 'bg-orange-500'),
    },
    outline: {
      blue: 'border-blue-500 text-blue-500',
      red: 'border-red-500 text-red-500',
      gray: 'border-gray-400 text-gray-400',
      green: 'border-green-500 text-green-500',
      yellow: 'border-yellow-500 text-yellow-500',
      pink: 'border-pink-500 text-pink-500',
      orange: 'border-orange-500 text-orange-500',
    },
  };

  const finalClass = clsx(
    base,
    sizeMap[size],
    variantMap[variant]?.[color],
    className
  );

  return (
    <As className={finalClass} {...props}>
      {children}
    </As>
  );
};
