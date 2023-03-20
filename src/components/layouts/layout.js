import Header from '../partials/header';
import Content from '../partials/content';
import '../css/layout.css'

function Layout( {children} ) {
    return (
      <div className=''>
        <Header />
        <Content>
          {children}
        </Content>
      </div>
    ); 
  }

  export default Layout;
