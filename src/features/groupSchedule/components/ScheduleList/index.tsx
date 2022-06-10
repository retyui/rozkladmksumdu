import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { observer } from 'mobx-react'

import { useGroupScheduleFeature } from '../../hooks'
import ScheduleCard from '../ScheduleCard'

import { useThemedStyles } from '@app/hooks/useThemedStyles'
import { DayOfWeek } from '@app/types/entities/DayOfWeek'

import { styles } from './styles'

const ScheduleList: React.FC = observer(() => {
  const themedStyles = useThemedStyles(styles)

  const { dayOfWeekList } = useGroupScheduleFeature()

  const renderScheduleCard = useCallback(
    ({ item }: { item: DayOfWeek }) => <ScheduleCard dayOfWeek={item} />,
    [],
  )

  const keyExtractor = useCallback((item: DayOfWeek) => item.toString(), [])

  return (
    <FlatList
      style={themedStyles.container}
      contentContainerStyle={themedStyles.contentContainer}
      showsHorizontalScrollIndicator={false}
      horizontal
      pagingEnabled
      data={dayOfWeekList}
      keyExtractor={keyExtractor}
      renderItem={renderScheduleCard}
    />
  )
})

export default ScheduleList
