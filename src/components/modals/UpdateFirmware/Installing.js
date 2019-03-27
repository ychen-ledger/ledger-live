// @flow
import React, { Fragment } from 'react'
import { Trans } from 'react-i18next'

import Box from 'components/base/Box'
import Text from 'components/base/Text'
import ProgressCircle from 'components/ProgressCircle'

type Props = {
  progress: number,
  installing: string,
}

function Installing({ progress, installing }: Props) {
  return (
    <Fragment>
      <Box mx={7} align="center">
        <ProgressCircle size={64} progress={progress} />
      </Box>
      <Box mx={7} mt={4} mb={2}>
        <Text ff="Museo Sans|Regular" align="center" color="dark" fontSize={6}>
          {installing ? <Trans i18nKey={`manager.modal.steps.${installing}`} /> : null}
        </Text>
      </Box>
      <Box mx={7} mt={4} mb={7}>
        <Text ff="Open Sans|Regular" align="center" color="graphite" fontSize={4}>
          <Trans i18nKey="manager.modal.mcuPin" />
        </Text>
      </Box>
    </Fragment>
  )
}

export default Installing
