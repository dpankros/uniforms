import Form    from 'antd/lib/form';
import Icon    from 'antd/lib/icon';
import React   from 'react';
import Tooltip from 'antd/lib/tooltip';

export default function wrapField ({
    error,
    errorMessage,
    id,
    info,
    label,
    showInlineError
}, children) {
    const labelNode = !!label && (
        <span>
            {label}
            {!!info && (
                <span>
                    &nbsp;
                    <Tooltip title={info}>
                        <Icon type="question-circle-o" />
                    </Tooltip>
                </span>
            )}
        </span>
    );

    return (
        <Form.Item
            hasFeedback
            help={showInlineError && errorMessage}
            htmlFor={id}
            label={labelNode}
            style={{marginBottom: '12px'}}
            validateStatus={error ? 'error' : undefined}
        >
            {children}
        </Form.Item>
    );
}
