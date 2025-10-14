import React from 'react';
import '../Styles/Skeleton.scss';

const SkeletonSection = ({ children }) => (
    <div className="skeleton-section">
        {children}
    </div>
);

const BasicSkeleton = () => (
    <SkeletonSection>
        <div className="skeleton-box box-sm" />
        <div className="skeleton-box box-md" />
        <div className="skeleton-box box-lg" />
        <div className="skeleton-box box-md" />
    </SkeletonSection>
);

const RepeatSkeleton = ({ count = 3 }) => (
    <>
        {Array.from({ length: count }).map((_, i) => (
            <BasicSkeleton key={i} />
        ))}
    </>
);

export default RepeatSkeleton;
