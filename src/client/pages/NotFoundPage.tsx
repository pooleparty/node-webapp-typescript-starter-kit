import * as React from 'react';

interface Props {
  className?: string;
  staticContext?: {
    notFound?: boolean;
  };
}

export const NotFoundPage: React.SFC<Props> = ({
  className,
  staticContext = {},
}) => {
  staticContext.notFound = true;
  return (
    <div className={className}>
      <h1>Page Not Found</h1>
    </div>
  );
};

NotFoundPage.displayName = 'NotFoundPage';

export default {
  component: NotFoundPage,
};
