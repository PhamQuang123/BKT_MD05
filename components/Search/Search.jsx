function Search() {
  return (
    <>
      <h1>Thống kê đơn hàng</h1>
      <div className="row mb-4">
        <form className="d-flex col-12" role="search">
          <div className="col-2">
            <span>Danh sách từ</span>
            <input
              className="form-control me-2"
              type="date"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="col-2">
            <span>đến</span>
            <input
              className="form-control me-2"
              type="date"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <button className="btn btn-outline-success" type="submit">
            Xem
          </button>
        </form>
      </div>
    </>
  );
}
export default Search;
