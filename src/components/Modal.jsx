

const Modal = () => {
  return (
    <div>
        <dialog id="my_modal" className="modal modal-middle">
            <div className="modal-box bg-white">
            
              <div className="modal-action">
              <form className="card-body" method="dialog">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
                
              </div>
            </div>

          </dialog>
          
    </div>
  )
}

export default Modal