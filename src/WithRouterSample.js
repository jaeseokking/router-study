import React from 'react'
import { withRouter } from 'react-router-dom';

function WithRouterSample({ location, match, history }) {
    return (
        <div>
            <h4>location</h4>
            {/* null, 2 적용하면 JSON에 들여쓰기 적용된 상태로 문자열 생성 */}
            <textarea value={JSON.stringify(location, null, 2)}
                rows={7} readOnly={true} />

            <h4>match</h4>
            <textarea value={JSON.stringify(match, null, 2)}
                rows={7} readOnly={true} />
            <button onClick={() => history.push('/')}>홈으로</button>
        </div>
    )
}

export default withRouter(WithRouterSample);
