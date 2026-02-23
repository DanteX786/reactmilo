import React from 'react'

export const Content = () => {
  return (

    <div className="container mt-4">
      <div className="row">

        {/* COLUMNA IZQUIERDA - PRODUCTOS */}
        <div className="col-md-8">
          <div className="row g-3">

{/* Producto 1 */}
<div className="col-md-6">
  <div className="card shadow-sm h-100">
    <img 
  src="./img/audifonos buenos.png"
  className="card-img-top"
  style={{ height: "400px", objectFit: "cover" }}
  alt="Audífonos"
/>
    <div className="card-body">
      <h6>Audífonos</h6>
        <p className="text-muted small">COP $130.900</p>
<div className="d-flex gap-1 mt-3">
  <button className="btn btn-sm btn-outline-dark">
    <i className="bi bi-pencil-square me-1"></i>
    Editar
  </button>
  <button className="btn btn-sm btn-outline-danger">
    <i className="bi bi-trash me-1"></i>
    Eliminar
  </button>
</div>
    </div>
  </div>
</div>

{/* Producto 2 */}
<div className="col-md-6">
  <div className="card shadow-sm h-100">
    <div className="card-body">
<img 
  src="./img/teclado bueno.png"
  className="card-img-top"
  style={{ height: "400px", objectFit: "cover" }}
  alt="Teclado"
/>
      <h6>Teclado Mecánico</h6>
        <p className="text-muted small">COP $249.000</p>
<div className="d-flex gap-1 mt-3">
  <button className="btn btn-sm btn-outline-dark">
    <i className="bi bi-pencil-square me-1"></i>
    Editar
  </button>
  <button className="btn btn-sm btn-outline-danger">
    <i className="bi bi-trash me-1"></i>
    Eliminar
  </button>
</div>
    </div>
  </div>
</div>

{/* Producto 3 */}
  <div className="col-md-6">
    <div className="card shadow-sm h-100">
      <div className="card-body">
<img 
  src="./img/mouse bueno.png"
  className="card-img-top"
  style={{ height: "300px", objectFit: "cover" }}
  alt="Mouse"/>
        <h6>Mouse Gamer</h6>
          <p className="text-muted small">COP $89.900</p>
<div className="d-flex gap-1 mt-3">
  <button className="btn btn-sm btn-outline-dark">
    <i className="bi bi-pencil-square me-1"></i>
    Editar
  </button>
  <button className="btn btn-sm btn-outline-danger">
    <i className="bi bi-trash me-1"></i>
    Eliminar
  </button>
</div>
    </div>
  </div>
</div>

{/* Producto 4 */}
<div className="col-md-6">
  <div className="card shadow-sm h-100">
    <div className="card-body">
<img 
  src="./img/monitor bueno.png"
  className="card-img-top"
  style={{ height: "300px", objectFit: "cover" }}
  alt="Monitor"/>
      <h6>Monitor 27”</h6>
        <p className="text-muted small">COP $899.000</p>
<div className="d-flex gap-1 mt-3">
  <button className="btn btn-sm btn-outline-dark">
    <i className="bi bi-pencil-square me-1"></i>
    Editar
  </button>
  <button className="btn btn-sm btn-outline-danger">
    <i className="bi bi-trash me-1"></i>
    Eliminar
  </button>
</div>
    </div>
  </div>
</div>

{/* Producto 5 */}
<div className="col-md-6">
  <div className="card shadow-sm h-100">
    <div className="card-body">

<img 
  src="./img/silla buena.png"
  className="card-img-top"
  style={{ height: "400px", objectFit: "cover" }}
  alt="Silla"/>

      <h6>Silla Gamer</h6>
        <p className="text-muted small">COP $699.000</p>
<div className="d-flex gap-1 mt-3">
  <button className="btn btn-sm btn-outline-dark">
    <i className="bi bi-pencil-square me-1"></i>
    Editar
  </button>
  <button className="btn btn-sm btn-outline-danger">
    <i className="bi bi-trash me-1"></i>
    Eliminar
  </button>
</div>
                </div>
              </div>
            </div>

{/* Producto 6 */}
<div className="col-md-6">
  <div className="card shadow-sm h-100">
    <div className="card-body">

<img 
  src="./img/tablet buena.png"
  className="card-img-top"
  style={{ height: "400px", objectFit: "cover" }}
  alt="Tablet"/>


      <h6>Tablet 10”</h6>
        <p className="text-muted small">COP $1.199.000</p>
          <div className="d-flex gap-1 mt-3">
            <button className="btn btn-sm btn-outline-dark">
              <i className="bi bi-pencil-square me-1"></i>Editar</button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="bi bi-trash me-1"></i>Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
  {/* DERECHA - BUSCADOR */}
    <div className="col-md-4"> <div className="card shadow-sm p-4">

  {/* Header azul */}
  <div className="card-header bg-black text-white fw-semibold">
    Agregar producto
  </div>

  <div className="card-body">

    {/* Nombre */}
    <div className="mb-3">
      <label className="form-label">Nombre del producto:</label>
      <input type="text" className="form-control" />
    </div>

    {/* Precio y Stock en la misma fila */}
    <div className="row mb-3">
      <div className="col-md-6">
        <label className="form-label">Precio (COP)</label>
        <div className="input-group">
          <span className="input-group-text">$</span>
          <input type="number" className="form-control" />
        </div>
      </div>

      <div className="col-md-6">
        <label className="form-label">Stock</label>
        <input type="number" className="form-control" defaultValue="1" />
      </div>
    </div>

    {/* Categoría */}
    <div className="mb-3">
      <label className="form-label">Categoría:</label>
      <select className="form-select">
        <option>Selecciona una categoría</option>
        <option>Tecnología</option>
        <option>Accesorios</option>
        <option>Gaming</option>
      </select>
    </div>

    {/* URL imagen */}
    <div className="mb-3">
      <label className="form-label">URL de imagen:</label>
      <input type="text" className="form-control" />
    </div>

    {/* Descripción */}
    <div className="mb-3">
      <label className="form-label">Descripción:</label>
      <textarea className="form-control" rows="3"></textarea>
    </div>

    {/* Botones */}
    <div className="d-flex gap-2">
      <button className="btn btn-success">
        <i className="bi bi-cart-plus me-2"></i>
        Agregar al catálogo
      </button>

      <button className="btn btn-danger text-white">
        <i className="bi bi-eraser me-2"></i>
        Limpiar
      </button>
    </div>

  </div>
</div>
  </div>
  </div>
</div>   
  )
}
