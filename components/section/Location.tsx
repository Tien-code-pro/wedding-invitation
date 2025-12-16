export default function Location() {
    return (
        <section className="py-20 text-center">
            <h2 className="text-3xl font-semibold mb-6">Địa điểm tổ chức</h2>

            <p className="mb-6">
                Nhà hàng ABC – 123 Đường Hạnh Phúc, TP.HCM
            </p>

            <div className="max-w-4xl mx-auto px-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18..."
                    className="w-full h-[400px] rounded-xl"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
}
