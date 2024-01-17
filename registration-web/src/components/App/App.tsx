import './App.scss';
import Bubbles from '../Bubbles/Bubbles';
import MainContent from '../MainContent/MainContent';
import { FunctionComponent } from 'preact';
import Home from '../Home/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Credits from '../Credits/Credits';
import Voucher from '../Voucher/Voucher';
import KorsoRegister from '../Register/KorsoRegister';
import GyuruRegister from '../Register/GyuruRegister';
import VendegRegister from '../Register/VendegRegister';
import HokRegister from '../Register/HokRegister';

const App: FunctionComponent = () => {

    return (
        <div className="main">
            <Bubbles />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route element={<MainContent />}>
                        <Route path='voucher/:type' element={<Voucher />} />
                        <Route path='register/korso' element={<KorsoRegister />} />
                        <Route path='register/gyuru' element={<GyuruRegister />} />
                        <Route path='register/vendeg' element={<VendegRegister />} />
                        <Route path='register/hok' element={<HokRegister />} />
                    </Route>
                    <Route path="*" element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Credits />
        </div>
    );
}

export default App;