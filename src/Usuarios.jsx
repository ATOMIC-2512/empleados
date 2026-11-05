function Usuarios({ user }) {
  // Iniciales a partir del nombre completo (ej. "Ana López" -> "AL")
  const initials = user.name
    .split(' ')
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <article className="card">
      <div className="avatar">{initials}</div>
      <h2 className="card-name">{user.name}</h2>
      <p className="card-info">{user.email}</p>
      <p className="card-info">{user.phone}</p>
      <p className="card-company">{user.company}</p>
    </article>
  );
}

export default Usuarios;