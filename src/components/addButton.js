const AddButton = () => {
  return (
    <div className='mr-3' style={{ position: 'relative' }}>
      <button className='px-4 py-4  text-white m-1  bg-red-300 hover:bg-red-200 add-button'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M12 6v6m0 0v6m0-6h6m-6 0H6'
          />
        </svg>
      </button>
    </div>
  );
};

export default AddButton;
