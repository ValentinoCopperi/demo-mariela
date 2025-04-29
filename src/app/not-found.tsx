const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 text-gray-800">
            <h1 className="text-5xl font-bold mb-4">404 - Página No Encontrada</h1>
            <p className="text-lg mb-6">Lo sentimos, aun no hemos desarollado esta pagina.</p>
            <a
                href="/"
                className="text-blue-600 hover:underline text-base"
            >
                Volver a la página de inicio
            </a>
        </div>
    );
};

export default NotFound;
