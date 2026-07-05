function COVIDView() {
    return (
        <div className="h-screen w-screen bg-white">
            <iframe title="COVID Visualization" src="/frames/covid/index.html" className="h-full w-full border-none overflow-hidden" />
        </div>
    );
}

export default COVIDView;
