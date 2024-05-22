import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';

const BodySectionWithMarginBottom = ({ title, children }) => {
    return (
        <div className={css(styles.bodySectionWithMargin)}>
            <BodySection title={title} {...{children}} />
        </div>
    );
};

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
        paddingBottom: '40px'
    }
});

export default BodySectionWithMarginBottom;