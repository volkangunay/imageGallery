import React from 'react';

class Image extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            spanCount: ''
        }
        // React REF Kullanım Alanları: 
        // Focus Yönetimi( Focuslanma ).
        // Yazı Seçimleri veya Media Yeniden Oynatıcılar.
        // 3.Parti DOM Kütüphaneleri ile entegre edilme.
        // Class Yapımıza createRef yaptıktan sonra div içine attirbute olarak ref={this.myRef} olarak eklenir.
        this.myRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.myRef);
        this.myRef.current.addEventListener('load', () =>{
            const spanCount = Math.round(this.myRef.current.clientHeight / 5) + 5;
            this.setState({
                spanCount
            });
        });
    }

    render (){

        const { image } = this.props;

        return (
            <img style={{
                gridRowEnd: `span ${this.state.spanCount}`
            }} ref={this.myRef} src={image.urls.small} alt={image.description} />
        )
    }
}

export default Image;