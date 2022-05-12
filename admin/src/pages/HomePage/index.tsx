/*
 *
 * HomePage
 *
 */

import React, { memo } from "react"
import { pluginId } from "../../pluginId"
// import PropTypes from 'prop-types';

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <h1>{pluginId}&apos;s Manis Page</h1>
    </div>
  )
}

export default memo(HomePage)
