import style from './entry-header.module.css';

export default function EntryHeader({ title, tagline, date, author }) {
  return (
    <div className={style.entry}>
      {title && <h2 className={style.title}>{title}</h2>}

      {tagline && <div className={style.meta}>{tagline}</div>}

      {date && author && (
        <div className={style.meta}>
          By {author} on <time>{new Date(date).toDateString()}</time>
        </div>
      )}
    </div>
  );
}
