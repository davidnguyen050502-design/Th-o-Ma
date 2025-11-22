import React from 'react';
import MainScreen from './components/MainScreen';

const App: React.FC = () => {
    // Chức năng nhập khóa API đã được loại bỏ.
    // Ứng dụng giờ đây giả định khóa API được đặt trong môi trường.
    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
            <MainScreen />
        </div>
    );
};

export default App;