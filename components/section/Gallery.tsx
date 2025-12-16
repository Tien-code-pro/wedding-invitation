export default function Gallery() {
    return (
        <section id="gallery" className="py-20 text-center">
            <h2 className="text-3xl font-semibold mb-10">Khoảnh khắc yêu thương</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                        key={i}
                        className="overflow-hidden rounded-xl cursor-pointer"
                    >
                        <img
                            src={`/images/gallery/${i}.jpg`}
                            alt="Wedding"
                            className="hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
