function Button({
  title,
  id,
  leftIcon,
  containerClass,
  rightIcon,
  href,
  target,
}) {
  const commonClasses = `group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`;

  const content = (
    <>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </>
  );

  if (href) {
    return (
      <a
        id={id}
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={commonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button id={id} className={commonClasses}>
      {content}
    </button>
  );
}

export default Button;
