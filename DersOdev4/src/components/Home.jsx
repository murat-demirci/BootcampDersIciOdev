import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 50
                }}>
                    <Link
                        style={{
                            textDecoration: 'none',
                            fontWeight: '500',
                            fontSize: 18,
                            color: 'blue',
                            userSelect: 'none',
                        }}
                        to={'/products'}>Products</Link>
                    <Link
                        style={{
                            textDecoration: 'none',
                            fontWeight: '500',
                            fontSize: 18,
                            color: 'blue',
                            userSelect: 'none'
                        }}
                        to={'/add-product'}>Add Product</Link>
                </div>
                <hr style={{ width: '100%' }} />
                <h1>HOME PAGE</h1>
            </div>
        </>
    )
}

export default Home