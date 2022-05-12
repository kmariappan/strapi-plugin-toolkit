/**
 *
 * Initializer
 *
 */

// @ts-nocheck
import { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { AnyType } from "../../../../types/common"
import { pluginId } from "../../pluginId"

const Initializer = ({ setPlugin }: AnyType) => {
  const ref = useRef()
  ref.current = setPlugin

  useEffect(() => {
    ref.current(pluginId)
  }, [])

  return null
}

Initializer.propTypes = {
  setPlugin: PropTypes.func.isRequired,
}

export default Initializer
