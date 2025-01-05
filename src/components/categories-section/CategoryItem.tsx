const CategoryItem = () => {
  return (
    <div>
      <button
        onClick={() => slideTo(index + 1)}
        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full"
      >
        {`Button ${index + 1}`}
      </button>
    </div>
  );
}

export default CategoryItem;