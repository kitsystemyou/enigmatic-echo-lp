"use client"

import { useEffect, useRef } from "react"

interface TwitterEmbedProps {
  username: string
}

export function TwitterEmbed({ username }: TwitterEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    document.body.appendChild(script)

    // Create Twitter timeline
    if (containerRef.current) {
      containerRef.current.innerHTML = ""
      const anchor = document.createElement("a")
      anchor.className = "twitter-timeline"
      anchor.href = `https://twitter.com/${username}?ref_src=twsrc%5Etfw`
      anchor.innerText = `Tweets by ${username}`
      containerRef.current.appendChild(anchor)

      // Initialize widget
      if ((window as any).twttr && (window as any).twttr.widgets) {
        ;(window as any).twttr.widgets.load(containerRef.current)
      }
    }

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script)
    }
  }, [username])

  return <div ref={containerRef} className="min-h-[300px]"></div>
}

