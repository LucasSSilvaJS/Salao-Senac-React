function Category({children, id, value, setValue, texto}) {
    return (
        <label for={id} className={`d-flex flex-column align-items-center justify-content-center text-center p-2 gap-2 ${value && 'border border-black rounded-2'}`} style={{ width: '130px', height: '130px', cursor: 'pointer' }}>
            {children}
            <span style={{ color: "var(--color-navy-blue)" }}>
                {texto}
            </span>
            <input type="checkbox" className="d-none" value={value} onChange={setValue} id={id} />
        </label>
    );
}

export default Category;