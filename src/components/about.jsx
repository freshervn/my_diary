import React, { Component } from 'react';
import myavtarHD from '../images/mattoifullhad.jpg';
import '../style/about.scss';

class About extends Component {
    state = {  }
    render() { 
        return (
        <main className='container pt-5 '>
            <header className='text-center mb-5'>
                <figure className='myavatar mx-auto mb-3'>
                    <img src={myavtarHD } alt='myAvater' />
                </figure>
                <h1 className='size-28'>
                    <b>
                        Bùi Thành Đạt
                    </b>
                </h1>
                <h3 className='size-16'>                    
                    Cá sấu
                </h3>
            </header>
            <section>
                <h2 className='size-16'>
                    <b>
                        Giới thiệu :
                    </b>
                </h2>
                <p className='mb-4 text-justify'>
                    Mình không đam mê code đâu, tại số giời cứ đùn đẩy ấy nên là phải theo thôi.
                    Chứ ước muốn của mình là trở thành ông nội chợ, ở nhà nấu cơm, chơi đàn, vẽ tranh, sáng tạo nghệ thuật... 
                    Nhưng mà phải thôi phải học code đã, để kiếm nhiều tiền, xong khởi nghiệp, rồi bán hết tất cả về nhà tận hưởng cuộc sống ông nội chợ!
                </p>
                <h3 className='size-16'>
                    <b>
                    Giới Tính:
                    </b>
                </h3>
                <p className='mb-4 text-justify'>Mình giới NAM, nhưng vì bị phái nữ cho lụy tình hơi nhiều, nên là mình cũng rất quan tâm đến các bạn trai thẳng khác</p>              
                <h3 className='size-16'>
                    <b>
                        Tuổi: 
                    </b>
                </h3>
                <p className='mb-4 text-justify'> 
                    Ờm thì mình tuổi Tý, có chút lươn lẹo. Mình không biết lúc nào nói mình nói thật, lúc nào mình nói xạo đâu. Nên là mình nói cái gì thì bạn chỉ tin một nửa thôi.
                </p>                                
            </section>            
            <section>
                <h2>Quy tắc</h2>
                <p>
                    <u>
                        <b>
                            Não : 
                        </b>                        
                    </u>
                    &nbsp;não sinh ra là để tuy duy tìm ra cách giải quyết vấn đề đề cuộc sống tốt hơn. Không bao giờ được để não có suy nghĩ tiêu cực.                                        
                </p>
                <p>
                    <u>
                        <b>
                            Sự thật :
                        </b>     
                    </u>
                    &nbsp;sự thật thì không thể thay đổi, chỉ có một cách là chấp nhận sự thật thôi.                    
                </p>
                <p>
                    <u>
                        <b>
                            Cảm xúc :
                        </b>     
                    </u>
                    &nbsp;mình cho phép bản thân được buồn bã, vui vẻ, tức giận hay bối rối..., vì rốt cuộc mình có gen của con người, nghĩa là mình cũng có cảm xúc như bao người bình thường khác.
                    Mình không phải tỏ ra khuyết tật tính cách bằng việc không cho bản thân khóc lóc một chút, hay không được cười cùng bạn bè.
                </p>
                <p>
                    <u>
                        <b>
                        Bạn thận :
                        </b>
                    </u>
                    &nbsp;là đứa đến ăn sinh nhật mình.  
                </p>
                <p>
                    <u>
                        <b>
                        Sát thủ :
                        </b>
                    </u>
                    &nbsp;Luôn có kế hoạch dự phòng.  
                </p>
                <p>
                    <u>
                        <b>
                        Doanh nhân :
                        </b>
                    </u>
                    &nbsp;bán gì thì bán, tình cảm là thứ không được bán.  
                </p>
                <p>
                    <u>
                        <b>
                        Tướng :
                        </b>
                    </u>
                    &nbsp;Đánh bại tướng thì làm tướng.  
                </p>
            </section>
        </main>
        );
    }
}
 
export default About;