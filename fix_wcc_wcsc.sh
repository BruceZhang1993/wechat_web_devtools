#!/bin/bash
# Run this script after updating app

fix () {
    pattern=$1
    files="$(git grep -l "$pattern".exe | grep -v "$pattern".linux)"

    if [ -n "$files" ]; then
        for file in $files; do
            echo processing "$file"
            sed -i s/"$pattern".exe/"$pattern".linux/g "$file"
        done
    fi
}

fix wcc
fix wcsc
