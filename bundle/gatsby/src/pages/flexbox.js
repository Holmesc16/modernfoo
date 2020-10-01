import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    max-height: 100vw;
    // height:500px;

    align-items: center;
    .box {
        flex: 1;
        height: 300px;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        display: flex;
          justify-content: space-around;
    grid-gap: 2;
    }
    .box-0 {
        background: rgba(20, 120, 120, 0.2);
        height:150px;
    }
    .box-1 {
        background: rgba(209, 22, 10, 0.2);
        height:150px;
        flex: 2;
    }
    .box-2 {
        background: rgba(20, 220, 120, 0.2);
        height:150px;
    }
    .box-3 {
        background: rgba(20, 120, 12, 0.2);
        height:150px;
        order: -1;
    }
    .box-4 {
        background: rgba(1, 40, 120, 0.5);
        height:150px;
    }
    .box-5 {
        background: rgba(202, 100, 220, 0.2);
        height:150px;
    }
    .box-6 {
        background: rgba(220, 220, 20, 0.2);
        height:150px;
    }
    .box-7 {
        background: rgba(30, 190, 020, 0.2);
        height:150px;
    }
    .box-8 {
        background: rgba(220, 10, 10, 0.2);
        height:150px;
    }
    .box-9 {
        background: rgba(220, 120, 10, 0.2);
        height:150px;
    }
    .box-10 {
        background: rgba(20, 10, 120, 0.2);
        height:150px;
    }
    .num {
        padding: 20px;
        display: flex;
        margin: 10px;
    }
`

const Flexbox = () => {
    return (
        <StyledWrapper className="wrapper">
            <div className="box box-0"><div className="num">0</div></div>
            <div className="box box-1"><div className="num">1</div></div>
            <div className="box box-2"><div className="num">2</div></div>
            <div className="box box-3"><div className="num">3</div></div>
            <div className="box box-4"><div className="num">4</div></div>
            <div className="box box-5"><div className="num">5</div></div>
            <div className="box box-6"><div className="num">6</div></div>
            <div className="box box-7"><div className="num">7</div></div>
            <div className="box box-8"><div className="num">8</div></div>
            <div className="box box-9"><div className="num">9</div></div>
            <div className="box box-10"><div className="num">10</div></div>
        </StyledWrapper>
    )
}

export default Flexbox;
