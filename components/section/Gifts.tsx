export default function Gifts() {
    return (
        <section className="py-20 text-center">
            <h2 className="text-3xl font-semibold mb-6">Mừng cưới</h2>

            <p className="mb-6">Sự hiện diện của bạn là niềm vui lớn nhất ❤️</p>

            <div className="flex justify-center gap-8">
                <div>
                    <img src="/images/qr-groom.png" className="w-40 mx-auto" />
                    <p>Chú rể</p>
                </div>
                <div>
                    <img src="/images/qr-bride.png" className="w-40 mx-auto" />
                    <p>Cô dâu</p>
                </div>
            </div>
        </section>
    );
}
