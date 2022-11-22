import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './BreadCrumbs.css';

function BreadCrumbs() {
  return (
    <Breadcrumb className="bread"> 
       <Breadcrumb  className="crumb">Operations></Breadcrumb>
      <Breadcrumb active className="crumbs">Tax Rates></Breadcrumb>
    </Breadcrumb>
  );
}

export default BreadCrumbs;