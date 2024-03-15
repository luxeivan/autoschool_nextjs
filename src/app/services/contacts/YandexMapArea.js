'use client'
import React from 'react'
import YandexMap from '../../../components/another/YandexMap'

export default function YandexMapArea({ data }) {
    return (
        <YandexMap lat={(data && data.latitude) || 55} lon={(data && data.longitude) || 37} />
    )
}
